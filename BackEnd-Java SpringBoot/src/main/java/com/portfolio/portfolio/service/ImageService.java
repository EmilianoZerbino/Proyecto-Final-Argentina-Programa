package com.portfolio.portfolio.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class ImageService implements IImageService {

	private final Path rootFolder = Paths.get("src/main/resources/images");

	@Override
	public String save(MultipartFile file) throws Exception {

		int i;
		boolean check = true;
		for (i = file.getOriginalFilename().length() - 1; check; i--) {
			if (file.getOriginalFilename().charAt(i) == '.') {
				check = false;
			}
		}
		String extension = file.getOriginalFilename().substring(i + 1);

		check = true;
		i = 1;

		while (check) {
			Resource resource = load(i + extension);
			if (resource.exists()) {
				i++;
			} else {
				check = false;
			}
		}

		Files.copy(file.getInputStream(), this.rootFolder.resolve(i + extension));

		String filename = i + extension;

		return filename;
	}

	@Override
	public Resource load(String name) throws Exception {
		Path file = rootFolder.resolve(name);
		Resource resource = new UrlResource(file.toUri());
		return resource;
	}

	@Override
	public String delete(String name) throws Exception {
		Path file = rootFolder.resolve(name);
		try {
			Files.delete(file);
			return "Imagen eliminada con éxito";
		} catch (Exception ex) {
			throw new Exception(ex.getMessage());
		}
			
	}
}
