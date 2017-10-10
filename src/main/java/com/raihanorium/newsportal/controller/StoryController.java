package com.raihanorium.newsportal.controller;

import com.raihanorium.newsportal.model.Story;
import com.raihanorium.newsportal.service.StoryService;
import com.raihanorium.newsportal.util.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by ataul.raihan on 10/7/2017.
 */
@RestController
@RequestMapping(value = "/api/story")
public class StoryController {
    @Autowired
    StoryService storyService;

    @RequestMapping(method = RequestMethod.GET)
    public RestResponse getAll() {
        RestResponse restResponse = new RestResponse();
        try {
            List<Story> stories = storyService.getAll();
            restResponse.setData(stories);
        } catch (Exception e) {
            restResponse.setError(true);
            restResponse.addMessage(e.getMessage());
        }
        return restResponse;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public RestResponse get(@PathVariable Long id) {
        RestResponse restResponse = new RestResponse();
        try {
            restResponse.addData(storyService.get(id));
        } catch (Exception e) {
            restResponse.setError(true);
            restResponse.addMessage(e.getMessage());
        }
        return restResponse;
    }

    @RequestMapping(method = RequestMethod.POST)
    public RestResponse create(@Valid @RequestBody Story story) {
        RestResponse restResponse = new RestResponse();
        try {
            restResponse.addData(storyService.create(story));
        } catch (Exception e) {
            restResponse.setError(true);
            restResponse.addMessage(e.getMessage());
        }
        return restResponse;
    }
}
