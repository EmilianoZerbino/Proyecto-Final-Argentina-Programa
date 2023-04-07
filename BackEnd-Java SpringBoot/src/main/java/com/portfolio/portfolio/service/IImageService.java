package com.portfolio.portfolio.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface IImageService {

	public String save(MultipartFile file) throws Exception;
	public Resource load (String name) throws Exception;
	public String delete (String name) throws Exception;
}
