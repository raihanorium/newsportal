package com.raihanorium.newsportal.util;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * Created by ataul.raihan on 10/9/2017.
 */
@Component
public class SpringUtil implements ApplicationContextAware {
    private static final String ERR_MSG = "Spring utility class not initialized";
    private static ApplicationContext context;

    public static <T> T bean(Class<T> clazz) {
        if (context == null) {
            throw new IllegalStateException(ERR_MSG);
        }
        return context.getBean(clazz);
    }

    public static <T> T bean(String name) {
        if (context == null) {
            throw new IllegalStateException(ERR_MSG);
        }
        return (T) context.getBean(name);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        context = applicationContext;
    }
}