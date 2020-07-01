<script>
  import { taskStore } from '../stores'
  let inputVal = ''

  const handleClick = () => {
    if (inputVal.length) {
      taskStore.addOne(inputVal)
      inputVal = ''
    }
  }
</script>

<div class="input-group mb-3">
  <input
    type="text"
    class="form-control"
    placeholder="Add a new task"
    aria-label="Add a new task"
    aria-describedby="addBtn"
    bind:value={inputVal}
  />
  <button
    class="btn btn-primary"
    type="button"
    id="addBtn"
    on:click={handleClick}
  >
    ADD
  </button>
</div>
