package ru.byprogminer.dbcw.controller

import org.springframework.web.bind.annotation.*
import ru.byprogminer.dbcw.entity.Cat
import ru.byprogminer.dbcw.entity.Client
import ru.byprogminer.dbcw.service.CatService
import ru.byprogminer.dbcw.service.ClientService

@RestController
@RequestMapping("/api/v1/client")
class ClientController(
    private val service: ClientService
) {

    @GetMapping
    fun getClients(): List<Client> = service.getClients()

    @PostMapping
    fun createClient(@RequestBody client: Client): Client = service.createClient(client)
}
