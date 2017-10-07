package com.raihanorium.newsportal.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ataul.raihan on 10/7/2017.
 */
@RestController
@RequestMapping(value = "/api")
public class HomeController {
    @RequestMapping(method = RequestMethod.GET)
    public String showHome() {
        return "Home";
    }
}
