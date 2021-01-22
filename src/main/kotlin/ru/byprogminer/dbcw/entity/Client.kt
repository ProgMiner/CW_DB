package ru.byprogminer.dbcw.entity

import javax.persistence.*

@Entity
class Client(
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "client_id_seq")
    @SequenceGenerator(name = "client_id_seq", sequenceName = "client_id_seq", allocationSize = 1)
    val id: Int?,

    val name: String,

    val discount: Double = 0.05
) {

    constructor(): this(null,  "", .0)
}
