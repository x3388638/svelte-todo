<style>
  :global(body) {
    background: #f8f9fa;
  }

  .App {
    max-width: 500px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 5px 0px #0000001f;
  }
</style>

<script>
  import InputBar from './InputBar'
  import TaskList from './TaskList'
</script>

<div class="App">
  <InputBar />
  <TaskList />
</div>
