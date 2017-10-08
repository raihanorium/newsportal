package com.raihanorium.newsportal.model;

import java.io.Serializable;

/**
 * Created by ataul.raihan on 10/7/2017.
 */
public class Story implements Serializable {
    private Long id;
    private String title;
    private String body;
    private String author;

    public Story() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
