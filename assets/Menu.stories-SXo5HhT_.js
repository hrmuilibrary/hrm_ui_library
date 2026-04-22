import{j as e}from"./jsx-runtime-C69_ep2g.js";import{r as i}from"./iframe-B4kJE5yM.js";import{M as C,N as I}from"./NestedMenu-oGktUh7U.js";import{B as b}from"./Button-3eBlV2bd.js";import{I as y}from"./IconArrowDownloadFilled-BGr96Cg8.js";import{I as g,a as h,b as x}from"./IconBeach-CXiFmPuP.js";import{I as M}from"./IconMore-CS9l2_He.js";import{I as O}from"./IconCheckmark-CVNdiKzA.js";import{I as n}from"./IconSettings-LMVkCURh.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BALBxxc_.js";import"./index-BULsaNJl.js";import"./Text-CmvpJS3M.js";import"./helpers-Dko3gFqJ.js";import"./index-AboGxAif.js";import"./types-tju7SxMQ.js";import"./index-DAsH4rhJ.js";import"./Popover-C4oIR-SC.js";import"./IconDismiss--09MBT45.js";import"./Link-gK0Os5SC.js";import"./CollapseGroup-DIb8tJGF.js";import"./Divider-ChnB6Dnr.js";import"./AnimatePresenceWrapper-Bhb_U2Ch.js";import"./IconChevronDown-P2aRch_x.js";import"./IconChevronUp-C3PbzD_I.js";import"./IconChevronRight-Dm1BWnMG.js";import"./AvatarGroup-BcPawsFs.js";import"./DropzoneFileUpload-CQDE9o6R.js";import"./Label-BWRMk2tf.js";import"./useFormProps-DExDRcXs.js";import"./ErrorMessage-BX1FFgws.js";import"./IconDynamicComponent-DS9xoDNJ.js";import"./Snackbar-qs9iEa94.js";import"./Alert-C2zOOhkk.js";import"./IconDismissFilled-BRzIioLt.js";import"./Progress-Bg8w1Q2v.js";import"./IconAdd-C7JAJ3oH.js";import"./Checkbox-D0wmi8rF.js";import"./IconInfo-B2Xuahtu.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
