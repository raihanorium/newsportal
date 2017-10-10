package com.raihanorium.newsportal.util;

import com.raihanorium.newsportal.model.Story;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by ataul.raihan on 10/7/2017. <br>
 *
 * This is the generic response format for JSON and XML responses passed through RESTFul service.
 *
 * Actual content of the response is assigned to {@link #data} field. Data can be added by {@link #addData(Object)} method.
 *
 * If there's an error, the {@link #error} is set to true and messages are added if necessary.
 */
@XmlRootElement
@XmlSeeAlso(Story.class) // TODO: Find a convenient way to render child object to xml
public class RestResponse {
    List data = new ArrayList();
    private boolean error = false;
    private List<String> errorFields = new ArrayList<>();
    private List<String> messages = new ArrayList<>();

    public RestResponse() {
    }

    public RestResponse(List data) {
        this.data = data;
    }

    @XmlAttribute
    public boolean isError() {
        return error;
    }

    public void setError(boolean error) {
        this.error = error;
    }

    @XmlElementWrapper(name = "errorFields")
    @XmlElement(name = "errorField")
    public List<String> getErrorFields() {
        return errorFields;
    }

    public void setErrorFields(List<String> errorFields) {
        this.errorFields = errorFields;
    }

    @XmlElementWrapper(name = "messages")
    @XmlElement(name = "message")
    public List<String> getMessages() {
        return messages;
    }

    public void setMessages(List<String> messages) {
        this.messages = messages;
    }

    public void addMessage(String errorMessage) {
        this.messages.add(errorMessage);
    }

    @XmlElementWrapper(name = "content")
    @XmlElement(name = "data")
    public List getData() {
        return data;
    }

    public void setData(List data) {
        this.data = data;
    }

    public void addData(Object data) {
        this.data.add(data);
    }
}
