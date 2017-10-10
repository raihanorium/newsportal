package com.raihanorium.newsportal.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Locale;

/**
 * Created by ataul.raihan on 10/9/2017.
 *
 * This is an utility class to retrieve messages from .properties files. Currently, it doesn't support multi language.
 */
@Component
public class Messages {
    @Autowired
    private MessageSource messageSource;

    private MessageSourceAccessor accessor;

    @PostConstruct
    private void init() {
        accessor = new MessageSourceAccessor(messageSource, Locale.ENGLISH);
    }

    public String getMessage(String code) {
        return accessor.getMessage(code);
    }
}
