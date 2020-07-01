import { derived } from 'svelte/store'
import { taskStore } from './task'

export const taskCountStore = derived(taskStore, ($taskList) => {
  const done = $taskList.filter((task) => task.done).length

  return {
    done,
    todo: $taskList.length - done
  }
})
