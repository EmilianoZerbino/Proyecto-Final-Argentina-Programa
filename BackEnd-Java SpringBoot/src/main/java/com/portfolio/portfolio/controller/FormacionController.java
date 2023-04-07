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

import com.portfolio.portfolio.model.Especialidad;
import com.portfolio.portfolio.model.EstadoAcademico;
import com.portfolio.portfolio.model.Formacion;
import com.portfolio.portfolio.model.Usuario;
import com.portfolio.portfolio.service.IEspecialidadService;
import com.portfolio.portfolio.service.IEstadoAcademicoService;
import com.portfolio.portfolio.service.IFormacionService;
import com.portfolio.portfolio.service.IUsuarioService;

@RestController
@RequestMapping("/formaciones")
@CrossOrigin(origins ="http://localhost:4200")
public class FormacionController {

	@Autowired
	private IFormacionService formacionService;
		
	@Autowired
	private IEspecialidadService especialidadService;
	
	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private IEstadoAcademicoService estadoAcademicoService;
		
	@GetMapping("/ver")
	@ResponseBody
	public List<Formacion> verFormacion(){	
		return formacionService.verFormacion();	
	}
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public Formacion buscarFormacion(@PathVariable(name = "id") long id) {
		return formacionService.buscarFormacion(id);
	}
		
	@PostMapping("/new")
	public void agregaFormacion (	@RequestParam("inicio") String inicio,
									@RequestParam("fin") String fin,
									@RequestParam("usuario_id") Long usuarioId,
									@RequestParam("nombreInstitucion") String nombreInstitucion,
									@RequestParam("nombreCarrera") String nombreCarrera,
									@RequestParam("estado_id") Long estadoId) throws Exception {
		
		Formacion formacion = new Formacion();
		List<Especialidad> especialidades = especialidadService.verEspecialidad();
		List<Usuario> usuarios = usuarioService.verUsuarios();
		List<EstadoAcademico> estados= estadoAcademicoService.verEstadoAcademico();
		for(Usuario usuario : usuarios) {
			if(usuario.getId()==usuarioId) {
				formacion.setUsuario(usuario);
			}
		}
		for(Especialidad especialidad : especialidades) {
			if(especialidad.getTitulo().equals(nombreCarrera) && especialidad.getInstitucionName().equals(nombreInstitucion)) {
				formacion.setEspecialidad(especialidad);
			}
		}
		for(EstadoAcademico estado : estados) {
			if(estado.getId()==estadoId) {
				formacion.setEstadoAcademico(estado);
			}
		}
		SimpleDateFormat formatoFecha = new SimpleDateFormat("yyyy-MM-dd");
		formacion.setInicio(formatoFecha.parse(inicio));
		formacion.setFin(formatoFecha.parse(fin));
		formacionService.crearFormacion(formacion);		
	}

	@DeleteMapping ("/delete/{id}")
	public void borrarFormacion (@PathVariable Long id) {
		formacionService.borrarFormacion(id);
	}
	
	}
