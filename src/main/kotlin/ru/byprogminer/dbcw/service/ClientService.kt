package ru.byprogminer.dbcw.service

import org.springframework.data.domain.Sort
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.simple.SimpleJdbcCall
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ru.byprogminer.dbcw.entity.Client
import ru.byprogminer.dbcw.repository.ClientRepository

@Service
@Transactional
class ClientService(
    private val repository: ClientRepository,
    private val jdbcTemplate: JdbcTemplate
) {

    fun getClients(): List<Client> = repository
        .findAll(Sort.by(Sort.Direction.DESC, "id"))
        .toList()

    fun createClient(client: Client): Client {
        val id = SimpleJdbcCall(jdbcTemplate).withFunctionName("create_client")
            .executeFunction(Int::class.java, client.name, client.discount)

        return repository.findById(id).get()
    }
}
