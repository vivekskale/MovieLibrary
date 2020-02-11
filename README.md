# lib-common-spring

This library contains Spring utilities and classes that can be used across projects.

## Maven Repo

Gradle integration

    repositories {
        maven {
            // lib-common-spring
            url "https://gitlab.com/api/v4/projects/16748301/packages/maven" 
            if (System.getenv("CI_JOB_TOKEN")) {
                credentials(HttpHeaderCredentials) {
                    name = "Job-Token"
                    value = System.getenv("CI_JOB_TOKEN")
                }
            } else {
                def properties = new Properties()
                properties.load(new File("../.env").newInputStream())
                credentials(HttpHeaderCredentials) {
                    name = "Private-Token"
                    value = properties.get("GITLAB_PRIVATE_TOKEN")
                }
            }
            authentication {
                header(HttpHeaderAuthentication)
            }
        }
    }
    
    dependencies {
        implementation "com.crosscountry.ea.common:lib-common-spring:${VERSION}"
    }