import React from 'react'
import './App.css';

function App() {

    React.useEffect(() => {
        const script = document.createElement('script');

        script.src = './script/iframeResizer.contentWindow.min'

        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className="App" >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam debitis deleniti
            distinctio, dolorem eius impedit in ipsam ipsum magnam nam pariatur praesentium qui quisquam similique
            soluta suscipit unde veniam vitae voluptatem voluptates voluptatibus? Consequuntur cum esse ipsam laudantium
            nulla praesentium similique totam. Adipisci aliquam aliquid commodi cum doloribus eos et ex fugiat ipsum
            iure iusto maiores minima molestias nemo nesciunt optio perspiciatis possimus, provident quia quis quod sit
            soluta, tempora voluptas, voluptatem! Ad, consectetur cumque deleniti ea facilis illum in ipsum laboriosam
            laudantium magnam molestias nemo nesciunt nihil nostrum omnis pariatur perferendis possimus repellat
            repudiandae ullam ut voluptate voluptatibus voluptatum. Ab aperiam atque consectetur cum cupiditate deserunt
            esse, est eveniet fugiat hic, impedit maiores natus necessitatibus nemo non nulla placeat quaerat quasi
            recusandae reprehenderit saepe suscipit voluptate voluptatem. Alias cum dignissimos quasi quia quibusdam
            similique? Beatae blanditiis consequuntur deserunt dignissimos dolore, earum esse fuga hic in ipsam iste
            molestias nam neque, pariatur possimus quasi quidem repudiandae sunt. Aliquid, amet architecto consectetur
            distinctio dolor eaque eligendi et iusto non optio quas quasi repellendus sapiente sit totam velit veritatis
            voluptates voluptatum. Accusamus consequatur, eius pariatur perferendis quas ratione rem reprehenderit sit
            ut. Amet asperiores aspernatur commodi deserunt ducimus ea, eligendi error eum ex excepturi exercitationem
            expedita facilis in ipsa iure labore laudantium minus nesciunt nihil nisi non perferendis porro quidem quis
            quos ratione saepe sapiente sequi, tenetur ut? Adipisci commodi corporis doloribus est laboriosam modi
            molestias porro voluptates, voluptatum. Asperiores assumenda corporis debitis ducimus earum explicabo id
            illo illum inventore mollitia optio quaerat quisquam recusandae reiciendis sint, soluta temporibus tenetur?
            Accusamus architecto deserunt eligendi ex exercitationem fuga fugit id illum iste itaque maiores nemo nisi
            perspiciatis praesentium, provident quae quasi quisquam repellat sed voluptatum? A amet dolorem
            exercitationem ipsum itaque praesentium quo. Accusamus adipisci assumenda cumque cupiditate esse et impedit
            in iste modi neque nobis odit possimus praesentium quia quibusdam quis repellendus tempora, tempore unde
            voluptatibus? Debitis, ducimus eius, explicabo facilis fugit maiores natus nobis, nostrum officia omnis sunt
            totam voluptatem. Aliquam blanditiis corporis cupiditate dignissimos eaque fuga molestiae optio quia quod
            sed sunt tempora tenetur vel veritatis vero, voluptates, voluptatibus. Ab accusamus animi asperiores
            consectetur culpa cupiditate dignissimos distinctio dolorum ea eaque eligendi eveniet harum, illo illum
            incidunt ipsam ipsum iste itaque labore laboriosam laborum molestias neque nihil nisi, nulla omnis optio
            provident quod sapiente similique, sit temporibus unde voluptate! Ab alias corporis ducimus error magni nisi
            pariatur perspiciatis quos suscipit ullam. A alias aliquam corporis cum earum eius ex fugit incidunt magnam
            molestiae natus, neque, officiis perspiciatis quisquam repellendus rerum sint vero! A accusantium ad aliquam
            consectetur dolore harum illum laudantium minima nemo numquam perspiciatis placeat possimus quas quibusdam
            repellat, saepe temporibus, veniam veritatis voluptas voluptate. Ad aliquid aut consequuntur, cumque dolor
            dolorem dolores dolorum ducimus excepturi harum hic illo iste, laboriosam laborum libero minus nisi rerum
            tempora ullam veniam. Consectetur, corporis cumque deleniti dolores dolorum ex explicabo facilis illum, ipsa
            ipsum iste iusto labore laboriosam maiores modi mollitia necessitatibus nesciunt nisi officia omnis
            temporibus veniam veritatis vero!



            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam debitis deleniti
            distinctio, dolorem eius impedit in ipsam ipsum magnam nam pariatur praesentium qui quisquam similique
            soluta suscipit unde veniam vitae voluptatem voluptates voluptatibus? Consequuntur cum esse ipsam laudantium
            nulla praesentium similique totam. Adipisci aliquam aliquid commodi cum doloribus eos et ex fugiat ipsum
            iure iusto maiores minima molestias nemo nesciunt optio perspiciatis possimus, provident quia quis quod sit
            soluta, tempora voluptas, voluptatem! Ad, consectetur cumque deleniti ea facilis illum in ipsum laboriosam
            laudantium magnam molestias nemo nesciunt nihil nostrum omnis pariatur perferendis possimus repellat
            repudiandae ullam ut voluptate voluptatibus voluptatum. Ab aperiam atque consectetur cum cupiditate deserunt
            esse, est eveniet fugiat hic, impedit maiores natus necessitatibus nemo non nulla placeat quaerat quasi
            recusandae reprehenderit saepe suscipit voluptate voluptatem. Alias cum dignissimos quasi quia quibusdam
            similique? Beatae blanditiis consequuntur deserunt dignissimos dolore, earum esse fuga hic in ipsam iste
            molestias nam neque, pariatur possimus quasi quidem repudiandae sunt. Aliquid, amet architecto consectetur
            distinctio dolor eaque eligendi et iusto non optio quas quasi repellendus sapiente sit totam velit veritatis
            voluptates voluptatum. Accusamus consequatur, eius pariatur perferendis quas ratione rem reprehenderit sit
            ut. Amet asperiores aspernatur commodi deserunt ducimus ea, eligendi error eum ex excepturi exercitationem
            expedita facilis in ipsa iure labore laudantium minus nesciunt nihil nisi non perferendis porro quidem quis
            quos ratione saepe sapiente sequi, tenetur ut? Adipisci commodi corporis doloribus est laboriosam modi
            molestias porro voluptates, voluptatum. Asperiores assumenda corporis debitis ducimus earum explicabo id
            illo illum inventore mollitia optio quaerat quisquam recusandae reiciendis sint, soluta temporibus tenetur?
            Accusamus architecto deserunt eligendi ex exercitationem fuga fugit id illum iste itaque maiores nemo nisi
            perspiciatis praesentium, provident quae quasi quisquam repellat sed voluptatum? A amet dolorem
            exercitationem ipsum itaque praesentium quo. Accusamus adipisci assumenda cumque cupiditate esse et impedit
            in iste modi neque nobis odit possimus praesentium quia quibusdam quis repellendus tempora, tempore unde
            voluptatibus? Debitis, ducimus eius, explicabo facilis fugit maiores natus nobis, nostrum officia omnis sunt
            totam voluptatem. Aliquam blanditiis corporis cupiditate dignissimos eaque fuga molestiae optio quia quod
            sed sunt tempora tenetur vel veritatis vero, voluptates, voluptatibus. Ab accusamus animi asperiores
            consectetur culpa cupiditate dignissimos distinctio dolorum ea eaque eligendi eveniet harum, illo illum
            incidunt ipsam ipsum iste itaque labore laboriosam laborum molestias neque nihil nisi, nulla omnis optio
            provident quod sapiente similique, sit temporibus unde voluptate! Ab alias corporis ducimus error magni nisi
            pariatur perspiciatis quos suscipit ullam. A alias aliquam corporis cum earum eius ex fugit incidunt magnam
            molestiae natus, neque, officiis perspiciatis quisquam repellendus rerum sint vero! A accusantium ad aliquam
            consectetur dolore harum illum laudantium minima nemo numquam perspiciatis placeat possimus quas quibusdam
            repellat, saepe temporibus, veniam veritatis voluptas voluptate. Ad aliquid aut consequuntur, cumque dolor
            dolorem dolores dolorum ducimus excepturi harum hic illo iste, laboriosam laborum libero minus nisi rerum
            tempora ullam veniam. Consectetur, corporis cumque deleniti dolores dolorum ex explicabo facilis illum, ipsa
            ipsum iste iusto labore laboriosam maiores modi mollitia necessitatibus nesciunt nisi officia omnis
            temporibus veniam veritatis vero!



            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aperiam debitis deleniti
            distinctio, dolorem eius impedit in ipsam ipsum magnam nam pariatur praesentium qui quisquam similique
            soluta suscipit unde veniam vitae voluptatem voluptates voluptatibus? Consequuntur cum esse ipsam laudantium
            nulla praesentium similique totam. Adipisci aliquam aliquid commodi cum doloribus eos et ex fugiat ipsum
            iure iusto maiores minima molestias nemo nesciunt optio perspiciatis possimus, provident quia quis quod sit
            soluta, tempora voluptas, voluptatem! Ad, consectetur cumque deleniti ea facilis illum in ipsum laboriosam
            laudantium magnam molestias nemo nesciunt nihil nostrum omnis pariatur perferendis possimus repellat
            repudiandae ullam ut voluptate voluptatibus voluptatum. Ab aperiam atque consectetur cum cupiditate deserunt
            esse, est eveniet fugiat hic, impedit maiores natus necessitatibus nemo non nulla placeat quaerat quasi
            recusandae reprehenderit saepe suscipit voluptate voluptatem. Alias cum dignissimos quasi quia quibusdam
            similique? Beatae blanditiis consequuntur deserunt dignissimos dolore, earum esse fuga hic in ipsam iste
            molestias nam neque, pariatur possimus quasi quidem repudiandae sunt. Aliquid, amet architecto consectetur
            distinctio dolor eaque eligendi et iusto non optio quas quasi repellendus sapiente sit totam velit veritatis
            voluptates voluptatum. Accusamus consequatur, eius pariatur perferendis quas ratione rem reprehenderit sit
            ut. Amet asperiores aspernatur commodi deserunt ducimus ea, eligendi error eum ex excepturi exercitationem
            expedita facilis in ipsa iure labore laudantium minus nesciunt nihil nisi non perferendis porro quidem quis
            quos ratione saepe sapiente sequi, tenetur ut? Adipisci commodi corporis doloribus est laboriosam modi
            molestias porro voluptates, voluptatum. Asperiores assumenda corporis debitis ducimus earum explicabo id
            illo illum inventore mollitia optio quaerat quisquam recusandae reiciendis sint, soluta temporibus tenetur?
            Accusamus architecto deserunt eligendi ex exercitationem fuga fugit id illum iste itaque maiores nemo nisi
            perspiciatis praesentium, provident quae quasi quisquam repellat sed voluptatum? A amet dolorem
            exercitationem ipsum itaque praesentium quo. Accusamus adipisci assumenda cumque cupiditate esse et impedit
            in iste modi neque nobis odit possimus praesentium quia quibusdam quis repellendus tempora, tempore unde
            voluptatibus? Debitis, ducimus eius, explicabo facilis fugit maiores natus nobis, nostrum officia omnis sunt
            totam voluptatem. Aliquam blanditiis corporis cupiditate dignissimos eaque fuga molestiae optio quia quod
            sed sunt tempora tenetur vel veritatis vero, voluptates, voluptatibus. Ab accusamus animi asperiores
            consectetur culpa cupiditate dignissimos distinctio dolorum ea eaque eligendi eveniet harum, illo illum
            incidunt ipsam ipsum iste itaque labore laboriosam laborum molestias neque nihil nisi, nulla omnis optio
            provident quod sapiente similique, sit temporibus unde voluptate! Ab alias corporis ducimus error magni nisi
            pariatur perspiciatis quos suscipit ullam. A alias aliquam corporis cum earum eius ex fugit incidunt magnam
            molestiae natus, neque, officiis perspiciatis quisquam repellendus rerum sint vero! A accusantium ad aliquam
            consectetur dolore harum illum laudantium minima nemo numquam perspiciatis placeat possimus quas quibusdam
            repellat, saepe temporibus, veniam veritatis voluptas voluptate. Ad aliquid aut consequuntur, cumque dolor
            dolorem dolores dolorum ducimus excepturi harum hic illo iste, laboriosam laborum libero minus nisi rerum
            tempora ullam veniam. Consectetur, corporis cumque deleniti dolores dolorum ex explicabo facilis illum, ipsa
            ipsum iste iusto labore laboriosam maiores modi mollitia necessitatibus nesciunt nisi officia omnis
            temporibus veniam veritatis vero!
        </div>
    );
}

export default App;
