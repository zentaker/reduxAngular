# Redux con angular 17
**Principales Características de Redux:**

- La data se almacena en una estructura definida.
- Todo se guarda en un lugar central llamado STORE, que nunca se modifica directamente.
- Las interacciones del usuario o el código disparan acciones que describen eventos.
- El estado (STATE) actual es el reflejo de la información en un momento dado.
- Los reducers crean un nuevo estado combinando el estado anterior y las acciones.

**Componentes Clave de Redux:**

- **Action**: Representa eventos con dos propiedades: `type` y `payload`.
- **Reducer**: Función que toma el estado actual y una acción, y retorna un nuevo estado.
- **State**: Es de solo lectura y centraliza la información de la aplicación.
- **Store**: Mantiene el estado y permite su gestión a través de `getState()`, `dispatch(action)` y `subscribe()`.





![img](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)

- implementacion en standalone compoenents

