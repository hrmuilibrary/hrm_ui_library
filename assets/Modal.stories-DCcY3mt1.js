import{j as t}from"./jsx-runtime-DXhgEWEq.js";import{r as c}from"./iframe-Dxu7kTaY.js";import{a as k,b as N,c as z,M as C}from"./Popover-CsTLJCEc.js";import{c as b}from"./index-D_o2rEy-.js";import"./types-BwufIdl1.js";import{u as B}from"./useOnOutsideClick-Bl_-mJEg.js";import{B as x}from"./Button-DO8ynCEe.js";import{T as f}from"./Text-CD4tez-b.js";import{r as $}from"./Tooltip-CrPGe3YI.js";import{a as A}from"./IconArrowDownloadFilled-C39dlQ0a.js";import{S as D}from"./index-Dh8iJXfY.js";import{I as R}from"./IconOpen-B5GR0ttH.js";import{S as w}from"./Status-BDfJGCn0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-YWimNWUU.js";import"./helpers-B695UWyA.js";import"./Link-dVb7V81W.js";import"./index-D0wQcglW.js";import"./NestedMenu-BKAHLovF.js";import"./CollapseGroup-CxhQb4vr.js";import"./Divider-g589Qf_G.js";import"./AnimatePresenceWrapper-ClrENR0X.js";import"./IconChevronDown-D2XdhL21.js";import"./IconChevronUp-CGyoVK6M.js";import"./IconChevronRight-bTSpc8NI.js";import"./AvatarGroup-CEJkfw1L.js";import"./DropzoneFileUpload-BK6XQOQY.js";import"./Label-H7I5gyLb.js";import"./useFormProps-D4QdzcSZ.js";import"./ErrorMessage-BLxoPjM-.js";import"./IconDynamicComponent-DjBQjvKP.js";import"./Snackbar-1IUeCmMg.js";import"./Alert-BBvnmEeq.js";import"./IconDismissFilled-CwxEKNA4.js";import"./Progress-Ds5GT8vB.js";import"./IconAdd-DqHVWPcD.js";import"./Checkbox-Brg7aDFi.js";import"./IconInfo-DT52J0Mf.js";import"./IconCheckmark-DBqFmxaK.js";import"./Empty-CU8DdDjI.js";import"./Image-BksLyemn.js";import"./Input-DySFxlWK.js";import"./IconCheckmarkCircleFilled-D2mW7qma.js";import"./IconChevronLeft-CPUTgdTn.js";import"./IconCaretDownFilled-DrgabqCQ.js";import"./extends-CF3RwP-h.js";import"./Tab-BulDVSkD.js";import"./Badge-Boz0I4xX.js";import"./IconMore-CmN9xjwh.js";const E=({isOpen:e,onClose:n,onSubmit:s,title:o,className:a="",size:_="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:y=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:O}=k({isOpen:e,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return B(v,n,y&&e,c.useId()),N(e),z(n,{enabled:e}),O?$.createPortal(t.jsx("div",{className:b("modal modal--confirmation",`modal--${_}`,`modal--${u}`,a),children:t.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:t.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?t.jsx("div",{className:"modal__icon mb-32",children:t.jsx(m.Component,{size:"xlarge"})}):null,o?t.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?t.jsx(f,{className:"mt-12",children:d}):null,p?t.jsxs("div",{className:"modal__footer mt-32",children:[t.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),t.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Et={title:"Modal",component:C,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(C,{...e,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},additionalButton:{buttonText:"danger",type:"danger"},headerIcon:t.jsx(R,{}),headerStatus:t.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:t.jsx("div",{children:t.jsx(D,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=e=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return t.jsxs("div",{children:[t.jsx("p",{onClick:a,children:"click here "}),t.jsx(E,{...e,iconProps:{Component:A},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,g,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} additionalButton={{
      buttonText: 'danger',
      type: 'danger'
    }} headerIcon={<IconOpen />} headerStatus={<Status type="danger" text="Rejected" size="small" withBackground />} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(M=(g=i.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var S,T,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const Ht=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,Ht as __namedExportsOrder,Et as default};
