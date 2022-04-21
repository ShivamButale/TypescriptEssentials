This video discusses <strong>understanding prototypical inheritance.</strong> <br>
Typescript supports Prototype-based programming.<br>
This starts with a special object called prototype.<br>
If you want to share behavior between object instances, you define that behavior on the prototype object<br>
and then link other object instances to that object.<br>

Here is an example:<br>
<pre>
<code> 
function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function () {
    return this.todos;
}

const service = new TodoService();
service.getAll();
</code>
</pre>  
