package ru.byprogminer.dbcw.repository

import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository
import ru.byprogminer.dbcw.entity.Cat

@Repository
interface CatRepository : PagingAndSortingRepository<Cat, Long>
