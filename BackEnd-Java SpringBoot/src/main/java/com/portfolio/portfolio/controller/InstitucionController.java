package com.portfolio.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.portfolio.portfolio.model.Institucion;
import com.portfolio.portfolio.service.IImageService;
import com.portfolio.portfolio.service.IInstitucionService;

@RestController
@RequestMapping("/instituciones")
@CrossOrigin(origins ="http://localhost:4200")
public class InstitucionController {

	@Autowired
	private IInstitucionService institucionService;
	
	@Autowired
	private IImageService imageService;
		
	@GetMapping("/ver")
	@ResponseBody
	public List<Institucion> verInstitucion(){	
		return institucionService.verInstitucion();	
	}
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public Institucion buscarInstitucion(@PathVariable(name = "id") long id) {
		return institucionService.buscarInstitucion(id);
	}
		
	@PostMapping("/new1")
	public void agregaInstitucion (@RequestParam("image") MultipartFile image, @RequestParam("nombre") String nombre, @RequestParam("acronimo") String acronimo ) throws Exception {
		Institucion institucion=new Institucion();
		institucion.setNombre(nombre);
		institucion.setAcronimo(acronimo);
		institucion.setUrl_logo("http://localhost:8080/images/"+imageService.save(image));
		institucionService.crearInstitucion(institucion);	
	}
	
	@PostMapping("/new2")
	public void agregaInstitucion (@RequestParam("nombre") String nombre, @RequestParam("acronimo") String acronimo ) throws Exception {
		Institucion institucion=new Institucion();
		institucion.setNombre(nombre);
		institucion.setAcronimo(acronimo);
		institucionService.crearInstitucion(institucion);	
	}

	@DeleteMapping ("/delete/{id}")
	public void borrarInstitucion (@PathVariable Long id) {
		institucionService.borrarInstitucion(id);
	}

}
