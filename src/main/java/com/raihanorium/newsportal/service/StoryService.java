package com.raihanorium.newsportal.service;

import com.raihanorium.newsportal.model.Story;

import java.util.List;

/**
 * Created by ataul.raihan on 10/8/2017.
 */
public interface StoryService {
    public Story get(Long id);

    public List<Story> getAll();

    public Story create(Story story);
}
