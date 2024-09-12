import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function RecipePage() {
    return (
      <>
        <Navbar/>
        <div className="recipesMainCard">
        <div className='indRecipeMainBox'>
            <h2>Charcoal Grilled Ribs</h2>
            <iframe width="420" height="315"
              src="https://www.youtube.com/embed/tG2ro7UZOUE">
          </iframe>
          <div className='indRecipeSideCard'>
            <img className='indRecipePic' src="./images/charcoalGrilledRibs.webp" alt="" />
            <div className='recipeTimeDiv'>
              <p>Prep: 10 min</p>
              <p>Cook: 40 min</p>
            </div>
            <div className='ingredientList'>
                <h4>Ingredients</h4>
                <ul>
                  <li>1 lb Ribs</li>
                  <li>Rib Seasoning</li>
                  <li>Lemon</li>
                  <li>milk</li>
                  <li>Eggs</li>
                  <li>something</li>
                  <li>something else</li>
                </ul>
            </div>
          </div>
          <div className='instructionDiv'>
            <h4>Instructions</h4>
            <ol>
              <li>first do this hfuf uidh uifh duifh duih afuidhfui h uifah uih ufdhjahudh fkjhu huiah ufh hfjusua hfuds</li>
              <li>Then do this hufdhui h fhuydg hd hgyhb yu gahyg yufg ayufg jhydgfyu gdjfyhgyjh afyhjg fyg by gajhgyu syag yug jyhgyh gyhg djhsa ghy fhjdgyg yg dyg yg dysgf ysd</li>
              <li> then maybe try this hfujidh uifhiusha fu hdaf</li>
              <li>and also do this huih uifh sudihf uidh ui hsuafih uifd huih fuihsduf hfuid hsuih uhh uiy fsyu yg gayu gy ggyg yfyg  ya</li>
              <li>but definitely do this jiu huifhs udhfui dhauih udhauhs auih usahu dushfug ud gfas gfyg d</li>
              <li>then finally do this ih fuidhuih uds hfui huh dsuahuiah uidf hshd gfgyudsgaf ydgggdyudhygygdyua gghjghjaghj gdshag hjg shaghjdgshajghgsdhaj ghsghj ghj dsghaj gdhjf ghjdsgf </li>
            </ol>
          </div>
          <div>
            <h4>Extra Stuff</h4>
            <p>This is where backstory, any extra tips or whatever will go juidh suihd fhsui fuif hgdhgf yudg hja dgshj gdhjsaghjg dhjghdsgayugew hjufg fbjkh guyhd hfdsg yu fbshjdgfy gdbagdgsjhf gdjhs ajhg dgf gysdgfgds agfyd gfg djhsg yuagyu gfjhgdshjafg yud gfuiydsg fdasf
              fghudis ghfaiud ghfhjlg dhjlg hjg yhujgh fdhg iugh uhg ihfi ugrf
               grui hafuih guifh uigh fui fgyudg fhjgd uyf gdyusgfyg daf gdfya f
            </p>
          </div>
        </div>
        </div>
      </>
    );
  }