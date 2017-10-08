package com.raihanorium.newsportal.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by ataul.raihan on 10/7/2017.
 */
@RestController
@RequestMapping
public class HomeController {
    @RequestMapping(method = RequestMethod.GET)
    public ModelAndView redirect() {
        return new ModelAndView("redirect:/index.html");
    }
}
