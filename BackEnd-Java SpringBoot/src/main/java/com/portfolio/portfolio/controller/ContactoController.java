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

import com.portfolio.portfolio.model.Contacto;
import com.portfolio.portfolio.model.Usuario;
import com.portfolio.portfolio.service.IContactoService;
import com.portfolio.portfolio.service.IImageService;
import com.portfolio.portfolio.service.IUsuarioService;


@RestController
@RequestMapping("/contactos")
@CrossOrigin(origins ="http://localhost:4200")
public class ContactoController {

	@Autowired
	private IContactoService contactoService;
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private IImageService imageService;
	
	@GetMapping("/ver")
	@ResponseBody
	public List<Contacto> verContacto(){	
		return contactoService.verContacto();	
	}
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public Contacto buscarContacto(@PathVariable(name = "id") long id) {
		return contactoService.buscarContacto(id);
	}
		
	@PostMapping("/new1")
	public void agregaContactoConImagen (@RequestParam("image") MultipartFile image, @RequestParam("linkContacto") String linkContacto, @RequestParam("usuario_id") Long usuarioId) throws Exception {
		Contacto contacto = new Contacto();
		contacto.setUrl_contacto(linkContacto);
		List<Usuario> usuarios = usuarioService.verUsuarios();
		for(Usuario usuario : usuarios) {
			if(usuario.getId()==usuarioId) {
				contacto.setUsuario(usuario);
			}
		}
		contacto.setUrl_logo("http://localhost:8080/images/"+imageService.save(image));
		contactoService.crearContacto(contacto);
	}
	
	@PostMapping("/new2")
	public void agregaContactoSinImagen (@RequestParam("linkContacto") String linkContacto, @RequestParam("usuario_id") Long usuarioId) throws Exception {
		Contacto contacto = new Contacto();
		contacto.setUrl_contacto(linkContacto);
		List<Usuario> usuarios = usuarioService.verUsuarios();
		for(Usuario usuario : usuarios) {
			if(usuario.getId()==usuarioId) {
				contacto.setUsuario(usuario);
			}
		}
		contactoService.crearContacto(contacto);
	}

	@DeleteMapping ("/delete/{id}")
	public void borrarContacto (@PathVariable Long id) {
		contactoService.borrarContacto(id);
	}
	
	@DeleteMapping ("/deleteByUserId/{id_usuario}")
	public void borrarContactoPorIdUsuario (@PathVariable Long id_usuario) {
		List<Contacto> listadoContactos = contactoService.verContacto();
		long id=0;
		for(Contacto existente : listadoContactos) {
			if(existente.getUsuarioId()==id_usuario) {
				id=existente.getId();
				contactoService.borrarContacto(id);
			}
		}
		
	}
}
