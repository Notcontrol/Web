package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by 18236 on 2017/12/21.
 */
@Controller
public class MainController {
    @GetMapping("/index")
    public String index(){
        return "index";
    }

    @GetMapping("/news")
    public String news(){
        return "news";
    }

    @GetMapping("/content")
    public String content(){
        return "content";
    }

    @GetMapping("/researcher")
    public String researcher(){
        return "researcher";
    }
}
