package ru.byprogminer.dbcw.entity

import javax.persistence.*

@Entity
class Good(
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "good_id_seq")
    @SequenceGenerator(name = "good_id_seq", sequenceName = "good_id_seq", allocationSize = 1)
    val id: Int?,

    val name: String,

    val price: Double,

    val type: String
) {

    constructor(): this(null, "", .0, "")
}
