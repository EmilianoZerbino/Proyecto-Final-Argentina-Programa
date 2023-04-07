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

import com.portfolio.portfolio.model.Skill;
import com.portfolio.portfolio.model.SkillUsuario;
import com.portfolio.portfolio.model.Usuario;
import com.portfolio.portfolio.service.ISkillService;
import com.portfolio.portfolio.service.ISkillUsuarioService;
import com.portfolio.portfolio.service.IUsuarioService;

@RestController
@RequestMapping("/skillsUsuarios")
@CrossOrigin(origins ="http://localhost:4200")
public class SkillUsuarioController {

	@Autowired
	private ISkillUsuarioService skillUsuarioService;

	@Autowired
	private IUsuarioService usuarioService;
	
	@Autowired
	private ISkillService skillService;
	
	@GetMapping("/ver")
	@ResponseBody
	public List<SkillUsuario> verSkillUsuario(){	
		return skillUsuarioService.verSkillUsuario();	
	}
	
	@GetMapping("/ver/{id}")
	@ResponseBody
	public SkillUsuario buscarSkillUsuario(@PathVariable(name = "id") long id) {
		return skillUsuarioService.buscarSkillUsuario(id);
	}
		
	@PostMapping("/new")
	public void agregaSkillUsuario (@RequestParam("usuario_id") Long usuarioId, @RequestParam("nombre") String nombre, @RequestParam("nivel") int nivel) {
		SkillUsuario skillUsuario = new SkillUsuario();
		List<Usuario> usuarios = usuarioService.verUsuarios();
		for(Usuario usuario : usuarios) {
			if(usuario.getId()==usuarioId) {
				skillUsuario.setUsuario(usuario);
			}
		}
		List<Skill> skills = skillService.verSkill();
		for(Skill skill : skills) {
			if(skill.getNombre().equals(nombre)) {
				skillUsuario.setSkill(skill);
			}
		}
		skillUsuario.setNivel(nivel);
		skillUsuarioService.crearSkillUsuario(skillUsuario);		
	}

	@DeleteMapping ("/delete/{id}")
	public void borrarSkillUsuario (@PathVariable Long id) {
		skillUsuarioService.borrarSkillUsuario(id);
	}

}
