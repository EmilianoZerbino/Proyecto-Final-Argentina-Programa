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

import com.portfolio.portfolio.model.Tecnologia;
import com.portfolio.portfolio.model.TecnologiaUsuario;
import com.portfolio.portfolio.model.Usuario;
import com.portfolio.portfolio.service.ITecnologiaService;
import com.portfolio.portfolio.service.ITecnologiaUsuarioService;
import com.portfolio.portfolio.service.IUsuarioService;

@RestController
@RequestMapping("/tecnologiasUsuarios")
@CrossOrigin(origins ="http://localhost:4200")
public class TecnologiaUsuarioController {

	@Autowired
	private ITecnologiaUsuarioService tecnologiaUsuarioService;
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private ITecnologiaService tecnologiaService;
		
	@GetMapping("/ver")
	@ResponseBody
	public List<TecnologiaUsuario> verTecnologiaUsuario(){	
		return tecnologiaUsuarioService.verTecnologiaUsuario();	
	}
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public TecnologiaUsuario buscarTecnologiaUsuario(@PathVariable(name = "id") long id) {
		return tecnologiaUsuarioService.buscarTecnologiaUsuario(id);
	}
		
	@PostMapping("/new")
	public void agregaTecnologiaUsuario (@RequestParam("usuario_id") Long usuarioId, @RequestParam("nombre") String nombre, @RequestParam("nivel") int nivel) {
		TecnologiaUsuario tecnologiaUsuario = new TecnologiaUsuario();
		List<Usuario> usuarios = usuarioService.verUsuarios();
		for(Usuario usuario : usuarios) {
			if(usuario.getId()==usuarioId) {
				tecnologiaUsuario.setUsuario(usuario);
			}
		}
		List<Tecnologia> tecnologias = tecnologiaService.verTecnologia();
		for(Tecnologia tecnologia : tecnologias) {
			if(tecnologia.getNombre().equals(nombre)) {
				tecnologiaUsuario.setTecnologia(tecnologia);
			}
		}
		tecnologiaUsuario.setNivel(nivel);
		tecnologiaUsuarioService.crearTecnologiaUsuario(tecnologiaUsuario);		
	}

	@DeleteMapping ("/delete/{id}")
	public void borrarTecnologiaUsuario (@PathVariable Long id) {
		tecnologiaUsuarioService.borrarTecnologiaUsuario(id);
	}

}
