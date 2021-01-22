package ru.byprogminer.dbcw.entity

import javax.persistence.*

@Entity
class CatBreed(
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cat_breed_id_seq")
    @SequenceGenerator(name = "cat_breed_id_seq", sequenceName = "cat_breed_id_seq", allocationSize = 1)
    val id: Int?,

    val name: String,

    val price: Int = 20000
) {

    constructor(): this(null, "", 0)
}
