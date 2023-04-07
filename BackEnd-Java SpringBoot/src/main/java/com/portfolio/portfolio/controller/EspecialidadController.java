package com.portfolio.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.portfolio.model.Especialidad;
import com.portfolio.portfolio.model.Institucion;
import com.portfolio.portfolio.service.IEspecialidadService;
import com.portfolio.portfolio.service.IInstitucionService;

@RestController
@RequestMapping("/especialidades")
@CrossOrigin(origins ="http://localhost:4200")
public class EspecialidadController {

	@Autowired
	private IEspecialidadService especialidadService;
	
	@Autowired
	private IInstitucionService institucionService;
		
	@GetMapping("/ver")
	@ResponseBody
	public List<Especialidad> verEspecialidad(){	
		return especialidadService.verEspecialidad();	
	}
	
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public Especialidad buscarEspecialidad(@PathVariable(name = "id") long id) {
		return especialidadService.buscarEspecialidad(id);
	}
		
	@PostMapping("/new")
	public void agregaEspecialidad (@RequestBody Especialidad especialidad) {
		System.out.println(especialidad.getInstitucionName());
		List<Institucion> instituciones = institucionService.verInstitucion();
		for(Institucion institucion : instituciones){
			System.out.println(institucion.getNombre());
			if(institucion.getNombre().equals(especialidad.getInstitucionName())) {
				System.out.println("entro");
				especialidad.setInstitucion(institucion);
				especialidadService.crearEspecialidad(especialidad);
			}
		}	
	}

	@DeleteMapping ("/delete/{id}")
	public void borrarEspecialidad (@PathVariable Long id) {
		especialidadService.borrarEspecialidad(id);
	}

}
