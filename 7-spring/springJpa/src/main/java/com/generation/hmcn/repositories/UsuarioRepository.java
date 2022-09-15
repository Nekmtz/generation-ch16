package com.generation.hmcn.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.generation.hmcn.models.UsuarioModels;

@Repository

public interface UsuarioRepository extends CrudRepository <UsuarioModels, Long> {
	public abstract ArrayList <UsuarioModels>findByPrioridad(Integer prioridad);

}
