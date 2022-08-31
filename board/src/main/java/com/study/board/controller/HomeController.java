package com.study.board.controller;

import org.springframework.web.bind.annotation.GetMapping;

//@RestController
public class HomeController {
    @GetMapping
    public String main() {

        return "index";
    }

}

