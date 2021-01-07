package ru.byprogminer.dbcw

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.boot.runApplication


// TODO security
@SpringBootApplication(exclude = [SecurityAutoConfiguration::class])
class DatabasesCourseWorkApplication


fun main(args: Array<String>) {
	runApplication<DatabasesCourseWorkApplication>(*args)
}
