package com.raihanorium.newsportal.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.raihanorium.newsportal.util.DateAdapter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by ataul.raihan on 10/7/2017.
 */
@XmlRootElement
@XmlType(propOrder = {"title", "author", "publishedOn", "body"})
public class Story implements Serializable {
    private Long id;

    @NotEmpty
    private String title;

    @NotEmpty
    @Size(min = 40)
    private String body;

    @NotEmpty
    private String author;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    @NotNull
    private Date publishedOn;

    public Story() {
    }

    @XmlAttribute
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

    @XmlJavaTypeAdapter(value = DateAdapter.class, type = Date.class)
    public Date getPublishedOn() {
        return publishedOn;
    }

    public void setPublishedOn(Date publishedOn) {
        this.publishedOn = publishedOn;
    }
}
