<script>
  import { taskStore } from '../stores'
  let inputVal = ''

  const handleAdd = () => {
    if (inputVal.length) {
      taskStore.addOne(inputVal)
      inputVal = ''
    }
  }

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleAdd()
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
    on:keypress={handleKeypress}
  />
  <button
    class="btn btn-primary"
    type="button"
    id="addBtn"
    on:click={handleAdd}
  >
    ADD
  </button>
</div>
