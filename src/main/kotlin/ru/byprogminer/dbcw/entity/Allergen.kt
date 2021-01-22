package ru.byprogminer.dbcw.entity

import javax.persistence.*

@Entity
class Allergen(
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "allergen_id_seq")
    @SequenceGenerator(name = "allergen_id_seq", sequenceName = "allergen_id_seq", allocationSize = 1)
    var id: Int?,

    var name: String
) {

    constructor(): this(null, "")
}
