import{j as e}from"./jsx-runtime-BiqM-ecW.js";import{r as c}from"./iframe-8txO-2QW.js";import{a as k,b as N,c as z,M as _}from"./Popover-C-FU8yaF.js";import{c as b}from"./index-Bz2E60yl.js";import"./types-Mv-0p2EE.js";import{u as $}from"./useOnOutsideClick-BBgmK26U.js";import{B as x}from"./Button-s8UnDnUL.js";import{T as f}from"./Text-t4HXzC8T.js";import{r as A}from"./Tooltip-vj0e5k7v.js";import{a as D}from"./IconArrowDownloadFilled-DRa18GaT.js";import{S as B}from"./index-DxK7z1hu.js";import{I as R}from"./IconOpen-BD4vcyR4.js";import{S as w}from"./Status-C-QEoF3m.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./IconDismiss-JvV-OIdj.js";import"./helpers-Ho8Wwbj1.js";import"./Link-D1ZnnrhJ.js";import"./index-VWooKi48.js";import"./NestedMenu-BfCpRAQ6.js";import"./CollapseGroup-CI5Nveii.js";import"./Divider-D2E7-Y4o.js";import"./AnimatePresenceWrapper-B5mpBP4b.js";import"./IconChevronDown-B2j6Lzua.js";import"./IconChevronUp-YGk1wzPO.js";import"./IconChevronRight-SL0m99Bk.js";import"./AvatarGroup-C_eXmzYI.js";import"./DropzoneFileUpload-gCn0avX-.js";import"./Label-C7686ZOL.js";import"./useFormProps-0QM-rMaz.js";import"./ErrorMessage-BLKtwRy7.js";import"./IconDynamicComponent-CYGUY6tn.js";import"./Snackbar-DkLik93A.js";import"./Alert-rjoUFM6N.js";import"./IconDismissFilled-odzfKs1W.js";import"./Progress-B21-AYUf.js";import"./IconAdd-CIFf3V1Q.js";import"./Checkbox-CdGXssq_.js";import"./IconInfo-DaIomXZJ.js";import"./IconCheckmark-BXD_0S--.js";import"./Empty-DAsajf5l.js";import"./Image-kVbsnvRE.js";import"./Input-CQ_CuX5Y.js";import"./IconCheckmarkCircleFilled-DaPe2ciB.js";import"./IconChevronLeft-CldONo-P.js";import"./IconCaretDownFilled-CuDXB91j.js";import"./extends-CF3RwP-h.js";import"./Tab-CxJGt4eh.js";import"./Badge-DNIoWTNJ.js";import"./IconMore-CuiWxSyv.js";const E=({isOpen:t,onClose:n,onSubmit:s,title:o,className:a="",size:T="small",buttonProps:p,dataTestIdPrefix:r,closeOnOutsideClick:O=!0,iconProps:m,subtitle:d})=>{const{animationState:u,shouldRender:y}=k({isOpen:t,enterDuration:400,exitDuration:200}),[v,I]=c.useState(null);return $(v,n,O&&t,c.useId()),N(t),z(n,{enabled:t}),y?A.createPortal(e.jsx("div",{className:b("modal modal--confirmation",`modal--${T}`,`modal--${u}`,a),children:e.jsx("div",{className:b("modal__container","text-center",`modal__container--${u}`),ref:I,children:e.jsxs("div",{className:"modal__content",children:[m!=null&&m.Component?e.jsx("div",{className:"modal__icon mb-32",children:e.jsx(m.Component,{size:"xlarge"})}):null,o?e.jsx(f,{weight:"bolder",lineHeight:"large",size:"large",dataTestId:r?`${r}-modal-title`:"",children:o}):null,d?e.jsx(f,{className:"mt-12",children:d}):null,p?e.jsxs("div",{className:"modal__footer mt-32",children:[e.jsx(x,{type:"secondary",className:"modal__footer__btn mr-16",onClick:n,dataTestId:r?`${r}-modal-cancel-button`:"",...p.cancel||{}}),e.jsx(x,{type:"danger",className:"modal__footer__btn",onClick:s,dataTestId:r?`${r}-modal-confirm-button`:"",...p.confirm})]}):null]})})}),document.body):null},Ee={title:"Modal",component:_,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},H=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],F=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(_,{...t,titleSize:"medium",onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},headerIcon:e.jsx(R,{}),headerStatus:e.jsx(w,{type:"danger",text:"Rejected",size:"small",withBackground:!0}),buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:e.jsx("div",{children:e.jsx(B,{options:H})})})]})},i=F.bind({});i.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const K=t=>{const[n,s]=c.useState(!1),o=()=>s(!1),a=()=>s(!0);return e.jsxs("div",{children:[e.jsx("p",{onClick:a,children:"click here "}),e.jsx(E,{...t,iconProps:{Component:D},onClose:o,isOpen:n,onSubmit:()=>{o(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},l=K.bind({});l.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var h,M,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
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
}`,...(S=(M=i.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var g,j,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const He=["Modal","ModalConfirmation"];export{i as Modal,l as ModalConfirmation,He as __namedExportsOrder,Ee as default};
