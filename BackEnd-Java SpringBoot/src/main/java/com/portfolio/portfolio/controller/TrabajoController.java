package com.portfolio.portfolio.controller;

import java.text.SimpleDateFormat;
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

import com.portfolio.portfolio.model.Institucion;
import com.portfolio.portfolio.model.Trabajo;
import com.portfolio.portfolio.model.Usuario;
import com.portfolio.portfolio.service.IInstitucionService;
import com.portfolio.portfolio.service.ITrabajoService;
import com.portfolio.portfolio.service.IUsuarioService;

@RestController
@RequestMapping("/trabajos")
@CrossOrigin(origins ="http://localhost:4200")
public class TrabajoController {

	@Autowired
	private ITrabajoService trabajoService;
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private IInstitucionService institucionService;
		
	@GetMapping("/ver")
	@ResponseBody
	public List<Trabajo> verTrabajo(){	
		return trabajoService.verTrabajo();	
	}
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public Trabajo buscarTrabajo(@PathVariable(name = "id") long id) {
		return trabajoService.buscarTrabajo(id);
	}
		
	@PostMapping("/new")
	public void agregaTrabajo ( @RequestParam("inicio") String inicio,
								@RequestParam("fin") String fin,
								@RequestParam("usuario_id") Long usuarioId,
								@RequestParam("nombreInstitucion") String nombreInstitucion,
								@RequestParam("cargo") String cargo) throws Exception {
		Trabajo trabajo = new Trabajo();
		List<Usuario> usuarios = usuarioService.verUsuarios();
		List<Institucion> instituciones= institucionService.verInstitucion();
		for(Usuario usuario : usuarios) {
			if(usuario.getId()==usuarioId) {
				trabajo.setUsuario(usuario);
			}
		}
		for(Institucion institucion : instituciones) {
			if(institucion.getNombre().equals(nombreInstitucion)) {
				trabajo.setInstitucion(institucion);
			}
		}
		trabajo.setFuncion(cargo);
		SimpleDateFormat formatoFecha = new SimpleDateFormat("yyyy-MM-dd");
		trabajo.setInicio(formatoFecha.parse(inicio));
		trabajo.setFin(formatoFecha.parse(fin));
		trabajoService.crearTrabajo(trabajo);	
	}

	@DeleteMapping ("/delete/{id}")
	public void borrarTrabajo (@PathVariable Long id) {
		trabajoService.borrarTrabajo(id);
	}

}
