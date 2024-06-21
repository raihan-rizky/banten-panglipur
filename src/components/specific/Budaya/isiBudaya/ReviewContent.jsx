import {
    Card,
    CardHeader,
    Avatar, Textarea, Button
  } from "@material-tailwind/react";
const reviewCard = ( userName, userReview, index ) => {
    let oddStyle = "max-w-[658px] lg:max-w-[558px] vs-max:max-w-[358px] vs-max:px-2"
    let evenStyle = "max-w-[658px] translate-x-32 lg:translate-x-0 lg:max-w-[558px] vs-max:max-w-[358px] vs-max:px-2"
    return(
    <Card color="transparent" shadow={false} className={ index%2 == 0 ? evenStyle : oddStyle}>
      <CardHeader
        color="white"
        floated={false}
        shadow={true}
        className="mx-0 flex items-center gap-4 p-10 vs-max:px-2"
      >
        <Avatar
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
        />
        <div className="flex container flex-col">
          <div className="container -translate-x-3">
            <div className="font-bold text-xl vs-max:text-lg">
              {userName}
            </div>
          </div>
          <p className="text-lg vs-max:text-xs">{userReview}</p>
        </div>
      </CardHeader>
    </Card>
    )
}
/*
<form id='reviewForm' class='review-detail__container'>
                <img class="reviews-detail__image lazyload" alt="person image" data-src="icons/person.png">
                <input id ="reviewName" class="reviews-detail__name" placeholder="Tulis Namamu disini!" type="text" spellcheck="false" required>
                <textarea class="reviews-detail__text" placeholder="Tulis Deskripsi disini!" id="reviewContent" spellcheck="false" required></textarea>
                <button id="reviewButton"  type="submit">Submit</button>
              </form>
              
              */
const ReviewContent = () => {
  const reviewForm = <form className="container flex-col flex">
                <Textarea className="-translate-x-4 m-0" variant="static" placeholder="Insert your review here!"></Textarea>
                
                <Button className="ml-24 vs-max:-translate-x-10 vs-max:translate-y-4 translate-y-1" id="reviewButton" size="sm" color="blue" variant="gradient"  type="submit">Submit</Button>
              </form>
              
    return(<>
        <div className="flex flex-col justify-start container max-w-full h-auto bg-gradient-to-b from-white to-[#87C0CD]">
            <picture className="flex container items-center pl-80 lg:pl-40 vs-max:pl-2">
                <img src="../../public/images/comment-icon.png" className="w-[37.5px] h-[37.5px]"/>
                <h1 className="pb-2 pl-4 w-full font-[400] text-3xl vs-max:text-xl ">Komentar</h1>
            </picture>
            <div className="flex flex-col gap-6 vs-max:gap-2 mb-20">
            {reviewCard("Nama User", reviewForm, 1)}
            {reviewCard("Yana_Cooking18", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 1)}
            {reviewCard("Yemima_je", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 2)}
            {reviewCard("Ahsani21_", "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 3)}
            </div>
        </div>
    </>)
}

export default ReviewContent;