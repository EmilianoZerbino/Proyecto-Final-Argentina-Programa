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

import com.portfolio.portfolio.model.Proyecto;
import com.portfolio.portfolio.model.Usuario;
import com.portfolio.portfolio.service.IImageService;
import com.portfolio.portfolio.service.IProyectoService;
import com.portfolio.portfolio.service.IUsuarioService;


@RestController
@RequestMapping("/proyectos")
@CrossOrigin(origins ="http://localhost:4200")
public class ProyectoController {

	@Autowired
	private IProyectoService proyectoService;
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private IImageService imageService;
	
	@GetMapping("/ver")
	@ResponseBody
	public List<Proyecto> verProyecto(){	
		return proyectoService.verProyecto();	
	}
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public Proyecto buscarProyecto(@PathVariable(name = "id") long id) {
		return proyectoService.buscarProyecto(id);
	}
	
	@PostMapping("/new1")
	public void agregaProyectoConImagen (@RequestParam("image") MultipartFile image, @RequestParam("nombreProyecto") String nombreProyecto, @RequestParam("linkProyecto") String linkProyecto, @RequestParam("usuario_id") Long usuarioId) throws Exception {
		Proyecto proyecto = new Proyecto();
		proyecto.setNombre(nombreProyecto);
		proyecto.setUrl_proyecto(linkProyecto);
		List<Usuario> usuarios = usuarioService.verUsuarios();
		for(Usuario usuario : usuarios) {
			if(usuario.getId()==usuarioId) {
				proyecto.setUsuario(usuario);
			}
		}
		proyecto.setUrl_logo("http://localhost:8080/images/"+imageService.save(image));
		proyectoService.crearProyecto(proyecto);
	}
	
	@PostMapping("/new2")
	public void agregaProyectoSinImagen (@RequestParam("nombreProyecto") String nombreProyecto, @RequestParam("linkProyecto") String linkProyecto, @RequestParam("usuario_id") Long usuarioId) throws Exception {
		Proyecto proyecto = new Proyecto();
		proyecto.setNombre(nombreProyecto);
		proyecto.setUrl_proyecto(linkProyecto);
		List<Usuario> usuarios = usuarioService.verUsuarios();
		for(Usuario usuario : usuarios) {
			if(usuario.getId()==usuarioId) {
				proyecto.setUsuario(usuario);
			}
		}
		proyectoService.crearProyecto(proyecto);
	}
	
	

	@DeleteMapping ("/delete/{id}")
	public void borrarProyecto (@PathVariable Long id) {
		proyectoService.borrarProyecto(id);
	}
	
	@DeleteMapping ("/deleteByUserId/{id_usuario}")
	public void borrarProyectoPorIdUsuario (@PathVariable Long id_usuario) {
		List<Proyecto> listadoProyectos = proyectoService.verProyecto();
		long id=0;
		for(Proyecto existente : listadoProyectos) {
			if(existente.getUsuarioId()==id_usuario) {
				id=existente.getId();
				proyectoService.borrarProyecto(id);
			}
		}
		
	}
}
