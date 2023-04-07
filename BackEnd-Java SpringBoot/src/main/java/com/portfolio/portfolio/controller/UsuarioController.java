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

import com.portfolio.portfolio.model.Encabezado;
import com.portfolio.portfolio.model.Usuario;
import com.portfolio.portfolio.service.IEncabezadoService;
import com.portfolio.portfolio.service.IUsuarioService;


@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins ="http://localhost:4200")
public class UsuarioController {

	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private IEncabezadoService encabezadoService;
	
	@GetMapping("/ver")
	@ResponseBody
	public List<Usuario> verUsuarios(){	
		return usuarioService.verUsuarios();		
	}
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public Usuario buscarUsuario(@PathVariable(name = "id") long id) {
		return usuarioService.buscarUsuario(id);
	}
		
	@PostMapping("/new")
	public void agregaUsuario (@RequestBody Usuario usuario) {
		usuarioService.crearUsuario(usuario);
		boolean idExistente=false;
		List<Encabezado> listadoEncabezados = encabezadoService.verEncabezado();
		for(Encabezado existente : listadoEncabezados) {
			if(existente.getUsuarioId()==usuario.getId()) {
				idExistente=true;//evalua la existencia de algun encabezado con el id_usuario ingresado, y de encontrarlo setea el Id 
			}
		}
		if(idExistente==false) {
			Encabezado encabezado= new Encabezado();
			encabezado.setUsuario(usuario);
		encabezadoService.crearEncabezado(encabezado);
		}
	}

	@DeleteMapping ("/delete/{id}")
	public void borrarUsuario (@PathVariable Long id) {
		usuarioService.borrarUsuario(id);
	}
	
	@PostMapping("/intereses")
	public void editarInteresesUsuario (@RequestBody Usuario usuario) {
		Usuario usuarioDb=usuarioService.buscarUsuario(usuario.getId());
		usuarioDb.setIntereses(usuario.getIntereses());
		usuarioService.crearUsuario(usuarioDb);
	}
	
}
