<style>
  .Task {
    display: flex;
    padding: 10px;
    box-shadow: 0px 2px 2px 0 #00000050;
    margin-bottom: 15px;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1) 0s;
  }

  .Task:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 2px 0 #00000050;
  }

  .Task--done {
    box-shadow: 0px 2px 2px 0 #00000010;
  }

  .Task--done:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 2px 0 #00000010;
  }

  .Task--done .Task__name {
    opacity: 0.3;
  }

  .Task span:nth-child(1) {
    flex: 1 1 0%;
    word-break: break-word;
    padding-right: 10px;
  }

  .Task span:not(:nth-child(1)) {
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
</style>

<script>
  import CheckIcon from './icons/CheckIcon'
  import TrashIcon from './icons/TrashIcon'
  import { taskStore } from '../stores'
  export let name = ''
  export let done = false
  export let key = null

  const handleToggleStatus = () => {
    taskStore.updateOne(key, {
      done: !done
    })
  }

  const handleDelete = () => {
    taskStore.removeOne(key)
  }
</script>

<div class="Task" class:Task--done={done}>
  <span class="Task__name">{name}</span>
  <span class="text-success" on:click={handleToggleStatus}>
    <CheckIcon />
  </span>
  <span class="text-danger" on:click={handleDelete}>
    <TrashIcon />
  </span>
</div>
