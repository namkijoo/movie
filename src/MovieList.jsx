import React from "react";
import Movie from "./Movie"

const Movies=[
    {
        image:"movie1.jpg",
        color:"red",
        title:"마이네임",
        year:"2021",
        genre:"범죄, 드라마, 미스터리",
        content:"아빠를 잃었다. 그것도 바로 눈앞에서. 남은 딸은 결심한다. 반드시 내 손으로 복수하겠노라고. 목표를 위해서라면 방법은 상관없다. 마약 조직의 언더커버가 되어 경찰에 잠입하는 것이라 해도.",
    },
    {
        image:"movie2.jpg",
        color:"orange",
        title:"라이프",
        year:"2018",
        genre:"드라마",
        content:"2018년 7월 JTBC에서 방영을 시작한 메디컬 드라마. 34개의 진료과목과 2,000개 규모의 병상을 갖춘 상국대학병원은 60년이 넘는 시간 동안 수많은 환자들과 의료진을 품은 유기체로 이 땅에서 숨 쉬고 있다. 어느 날 이곳에 의사가 아닌 재벌그룹 출신의 전문경영인이 병원 사장으로 오게 된다. 환자와 의료진으로만 이뤄졌던 상국대병원의 새로운 지배자인 셈. 여기에 한 청년의사가 반응한다. 지금껏 조용히 제 일만 하던 그는 자리에서 일어나 사장이 던진 돌을 집어 힘껏 되던진다. 둘의 격렬한 면역반응은 하루 8천 명의 환자가 드나드는 거대 의료기관을 어디로 끌고 갈까?",
    },
    {
        image:"movie3.jpg",
        color:"pink",
        title:"붉은단심",
        year:"2022",
        genre:"드라마",
        content:"살아남기 위해 사랑하는 여자를 내쳐야 하는 왕 이태와 살아남기 위해 중전이 되어야 하는 유정, 정적이 된 그들이 서로의 목에 칼을 겨누며 펼쳐지는 핏빛 정치 로맨스.",
    },
    {
        image:"movie4.jpg",
        color:"gray",
        title:"그 해 우리는",
        year:"2021",
        genre:"드라마, 드라마",
        content:"헤어진 연인이 고등학교 시절 촬영한 다큐멘터리의 역주행 인기로 강제 소환되면서 펼쳐지는 청춘들의 첫사랑 역주행 로맨스",
    },
]

function MovieList(){
    return(
        <div>
            {Movies.map((movie)=>{
                return <Movie
                        image= {movie.image}
                        title={movie.title}
                        year={movie.year}
                        genre={movie.genre}
                        content={movie.content}
                        color={movie.color}
                />
            })}
        </div>
    )
}


export default MovieList;