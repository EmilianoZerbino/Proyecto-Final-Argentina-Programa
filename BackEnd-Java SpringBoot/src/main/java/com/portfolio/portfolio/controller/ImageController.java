package com.portfolio.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.portfolio.portfolio.model.Encabezado;
import com.portfolio.portfolio.service.IEncabezadoService;
import com.portfolio.portfolio.service.IImageService;

@RestController
@RequestMapping("images")
@CrossOrigin(origins ="http://localhost:4200")
public class ImageController {

	@Autowired
	private IImageService fileService;
	
	@Autowired
	private IEncabezadoService encabezadoService;
	
	@GetMapping("/{filename:.+}")
	public ResponseEntity<Resource> getFile(@PathVariable String filename) throws Exception{
		try {
		Resource resource = fileService.load(filename);
				return ResponseEntity.ok()
					                 .header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=\""+resource.getFilename()+"\"")
					                 .body(resource);
		}catch (Exception ex) {
			return null;
		}
	}

	@PostMapping("/new")
	public void upoadFiles(@RequestParam("image") MultipartFile image, @RequestParam("id") String id, @RequestParam("tipo") String tipo ) throws Exception{
			String path= "http://localhost:8080/images/"+fileService.save(image);	
			List<Encabezado> listadoEncabezados = encabezadoService.verEncabezado();
			for(Encabezado encabezado : listadoEncabezados) {
				if(encabezado.getId()==Long.parseLong(id)) {
					if(tipo.equals("perfil")) {
					encabezado.setUrl_perfil(path);
					}
					if(tipo.equals("fondo")) {
						encabezado.setUrl_fondo(path);
					}
					encabezadoService.crearEncabezado(encabezado);
				}
			}
	}

	@DeleteMapping("/delete/{filename:.+}")
	public void deleteFiles(@PathVariable String filename) throws Exception{
		try {
		fileService.delete(filename);
		}catch (Exception ex) {
			
		}
	}
	
}
