package ru.byprogminer.dbcw.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import ru.byprogminer.dbcw.entity.Allergen

@Repository
interface AllergenRepository : JpaRepository<Allergen, Int>
