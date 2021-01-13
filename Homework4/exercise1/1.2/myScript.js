function tellStory(name,mood,activity)
{

return alert(`This is ${name}. ${name} is a nice person. Today he/she is ${mood}. He/she is ${activity} all day long.`); 
}

//getting the name, mood and the activity from the user!

let enterName=prompt("Enter name:");

let enterMood=prompt("Enter mood:");

let enterActivity=prompt("Enter activity:");

tellStory(enterName,enterMood,enterActivity);


