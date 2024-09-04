Tecnicas Utilizadas: Partición de Equivalencia, Análisis de Valores Límite, Prueba de Error Adivinado,Transición de Estados
Pruebas Exploratorias,

Feature: Creación de nuevo personal en OrangeHRM
  Scenario: Crear un nuevo personal con datos válidos
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Juan" en el campo de Nombre
    And ingreso "Pérez" en el campo de Apellido
    And ingreso "12345" en el campo de ID de empleado
    And selecciono "Activo" en el campo de Estado de empleo
    And selecciono "Ingeniero de Software" en el campo de Título de trabajo
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de éxito indicando que el personal fue creado

    Scenario: Intentar crear un nuevo personal dejando campos obligatorios vacíos
    Given que estoy en la página de creación de personal en OrangeHRM
    When dejo vacío el campo de Nombre
    And ingreso "Pérez" en el campo de Apellido
    And ingreso "12346" en el campo de ID de empleado
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el campo de Nombre es obligatorio 
    
    Scenario: Intentar crear un nuevo personal con un ID de empleado duplicado
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Ana" en el campo de Nombre
    And ingreso "Gómez" en el campo de Apellido
    And ingreso "12345" en el campo de ID de empleado
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el ID de empleado ya existe

    Scenario: Crear un nuevo personal con valores en el límite permitido
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "J" en el campo de Nombre
    And ingreso "G" en el campo de Apellido
    And ingreso "99999" en el campo de ID de empleado
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de éxito indicando que el personal fue creado
    
    Scenario: Editar un personal recién creado
    Given que he creado un nuevo personal con ID "12347"
    When navego a la página de edición de personal
    And cambio el campo de Nombre a "Carlos"
    And hago clic en el botón "Guardar"
    Then debería ver los detalles actualizados del personal con Nombre "Carlos"

    Scenario: Explorar diferentes combinaciones de datos en la creación de personal
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso datos inesperados en los campos de creación de personal
    And intento crear un nuevo personal con estos datos
    Then no debería encontrar errores no controlados en el sistema
    And debería ver mensajes de error o éxito apropiados según los datos ingresados

    Scenario: Intentar crear un nuevo personal con caracteres especiales en el campo de Nombre
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "!@#$$" en el campo de Nombre
    And ingreso "López" en el campo de Apellido
    And ingreso "12348" en el campo de ID de empleado
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el Nombre no puede contener caracteres especiales

    Scenario: Intentar crear un nuevo personal con números en el campo de Apellido
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "María" en el campo de Nombre
    And ingreso "López123" en el campo de Apellido
    And ingreso "12349" en el campo de ID de empleado
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el Apellido no puede contener números

    Scenario: Crear un nuevo personal sin ingresar datos de contacto
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Carlos" en el campo de Nombre
    And ingreso "Ramírez" en el campo de Apellido
    And ingreso "12350" en el campo de ID de empleado
    And dejo vacíos los campos de contacto (correo electrónico, teléfono)
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de éxito indicando que el personal fue creado
    And el personal debería aparecer sin datos de contacto en su perfil

    Scenario: Intentar crear un nuevo personal con una fecha de contratación en el futuro
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Sofía" en el campo de Nombre
    And ingreso "García" en el campo de Apellido
    And ingreso "12351" en el campo de ID de empleado
    And ingreso una fecha de contratación "2050-01-01" en el campo de Fecha de Contratación
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que la Fecha de Contratación no puede ser en el futuro

    Scenario: Intentar subir una foto de perfil de gran tamaño durante la creación de un nuevo personal
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Luis" en el campo de Nombre
    And ingreso "Torres" en el campo de Apellido
    And ingreso "12352" en el campo de ID de empleado
    And subo una foto de perfil de "10 MB" al sistema
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que la foto de perfil excede el tamaño permitido

    Scenario: Intentar crear un nuevo personal con el mismo valor en los campos de Nombre y Apellido
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Fernanda" en el campo de Nombre
    And ingreso "Fernanda" en el campo de Apellido
    And ingreso "12354" en el campo de ID de empleado
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el Nombre y Apellido no pueden ser iguales

    Scenario: Intentar crear un nuevo personal con un ID de empleado alfanumérico
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Gabriela" en el campo de Nombre
    And ingreso "Martínez" en el campo de Apellido
    And ingreso "ABC123" en el campo de ID de empleado
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de éxito indicando que el personal fue creado con el ID "ABC123"

    Scenario: Cancelar el proceso de creación de un nuevo personal
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Paula" en el campo de Nombre
    And ingreso "Rodríguez" en el campo de Apellido
    And hago clic en el botón "Cancelar"
    Then debería ser redirigido a la página anterior sin guardar los datos ingresados
    And no debería ver el nuevo personal en la lista de empleados

    Scenario: Intentar crear un nuevo personal con una fecha de nacimiento inválida
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Carlos" en el campo de Nombre
    And ingreso "Suárez" en el campo de Apellido
    And ingreso "12355" en el campo de ID de empleado
    And ingreso "31-02-1990" en el campo de Fecha de Nacimiento
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que la Fecha de Nacimiento es inválida

    Scenario: Intentar crear un nuevo personal con un correo electrónico inválido
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Laura" en el campo de Nombre
    And ingreso "Hernández" en el campo de Apellido
    And ingreso "12356" en el campo de ID de empleado
    And ingreso "correo@inválido" en el campo de Correo Electrónico
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el Correo Electrónico es inválido

    Scenario: Intentar crear un nuevo personal con un número de teléfono en un formato incorrecto
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Jorge" en el campo de Nombre
    And ingreso "Morales" en el campo de Apellido
    And ingreso "12357" en el campo de ID de empleado
    And ingreso "123-ABC-7890" en el campo de Teléfono
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el número de Teléfono es inválido

    Scenario: Intentar crear un nuevo personal sin seleccionar el campo de Género
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Marta" en el campo de Nombre
    And ingreso "González" en el campo de Apellido
    And ingreso "12358" en el campo de ID de empleado
    And dejo sin seleccionar el campo de Género
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el campo de Género es obligatorio

    Scenario: Intentar crear un nuevo personal con un título de trabajo no válido
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Alejandro" en el campo de Nombre
    And ingreso "Pérez" en el campo de Apellido
    And ingreso "12359" en el campo de ID de empleado
    And ingreso "12345" en el campo de Título de Trabajo
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el Título de Trabajo es inválido

    Scenario: Intentar crear un nuevo personal con información de dirección incompleta
    Given que estoy en la página de creación de personal en OrangeHRM
    When ingreso "Claudia" en el campo de Nombre
    And ingreso "Mendoza" en el campo de Apellido
    And ingreso "12360" en el campo de ID de empleado
    And ingreso "Calle 123" en el campo de Dirección 1
    And dejo vacío el campo de Ciudad
    And hago clic en el botón "Guardar"
    Then debería ver un mensaje de error indicando que el campo de Ciudad es obligatorio
