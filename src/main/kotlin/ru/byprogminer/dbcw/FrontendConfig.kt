package ru.byprogminer.dbcw

import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer


@Configuration
class FrontendConfig(private val environment: Environment): WebMvcConfigurer {

    override fun addCorsMappings(registry: CorsRegistry) {
        if ("helios" !in environment.activeProfiles) {
            registry.addMapping("/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowCredentials(true)
                    .allowedMethods("*")
                    .allowedHeaders("*")
        }
    }

    override fun addViewControllers(registry: ViewControllerRegistry) {
        registry.addViewController("/**/{:[^\\.]*}").setViewName("/index.html")
    }
}
