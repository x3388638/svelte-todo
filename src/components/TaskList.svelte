<style>
  .TaskList__status {
    margin-bottom: 10px;
  }

  .TaskList__status span {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
  }

  .TaskList__status span.active {
    border: 2px dotted;
  }
</style>

<script>
  import Task from './Task'
  import { taskStore, taskCountStore } from '../stores'

  let visibility = 'all'

  $: taskList =
    visibility === 'all'
      ? $taskStore
      : visibility === 'done'
      ? $taskStore.filter((task) => task.done)
      : $taskStore.filter((task) => !task.done)

  const handleToggleVisibility = (type) => {
    if (visibility === type) {
      visibility = 'all'
    } else {
      visibility = type
    }
  }
</script>

<div class="TaskList">
  <div class="TaskList__status">
    <span
      class="badge bg-success"
      class:active={visibility === 'todo'}
      on:click={() => {
        handleToggleVisibility('todo')
      }}
    >
      Todo: {$taskCountStore.todo}
    </span>
    <span
      class="badge bg-secondary"
      class:active={visibility === 'done'}
      on:click={() => {
        handleToggleVisibility('done')
      }}
    >
      Done: {$taskCountStore.done}
    </span>
  </div>
  {#each taskList as { name, done, key } (key)}
    <Task name={name} done={done} key={key} />
  {/each}
</div>
