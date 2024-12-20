function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
 const r_input = document.querySelector("#radius")
 const v_input = document.querySelector("#volume")
	let radius = r_input.value;
	let vol = 4/3*(3.14159265359*radius**3)
	v_input.value = vol.toFixed(4)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
