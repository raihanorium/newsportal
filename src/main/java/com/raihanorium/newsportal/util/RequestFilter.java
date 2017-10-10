package com.raihanorium.newsportal.util;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by ataul.raihan on 10/9/2017.
 *
 * This class filters all the requests and allows or disallows requests based on application settings.
 */
public class RequestFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpServletRequest request = (HttpServletRequest) servletRequest;

        response.setHeader("Access-Control-Allow-Origin", getAllowedOrigins());
        response.setHeader("Access-Control-Allow-Methods", getAllowedHttpMethods());
        response.setHeader("Access-Control-Allow-Headers", getAllowedHttpHeaders());

        // System.out.println("Processing request... " + request.getMethod() + " - " + servletRequest.getRemoteAddr());

        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            filterChain.doFilter(servletRequest, response);
        }
    }

    @Override
    public void destroy() {

    }

    private String getAllowedOrigins() throws IOException {
        Messages messages = SpringUtil.bean(Messages.class);
        return messages.getMessage("cors.allowed.origins");
    }

    private String getAllowedHttpMethods() throws IOException {
        Messages messages = SpringUtil.bean(Messages.class);
        return messages.getMessage("http.allowed.methods");
    }

    private String getAllowedHttpHeaders() throws IOException {
        Messages messages = SpringUtil.bean(Messages.class);
        return messages.getMessage("http.allowed.headers");
    }
}
